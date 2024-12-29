from typing import Dict, List
from flask import Flask, render_template, request, redirect, url_for, session, flash
from pathlib import Path

import werkzeug.security as security
import json
import threading

app = Flask(__name__)

# Secret key for session management
app.secret_key = "your_secret_key"


DATABASE_PATH = Path.home() / "db.json"

db_lock = threading.Lock()


class User:

    def __init__(self, username: str, password_hash: str):
        self.username: str = username
        self.password_hash: str = password_hash
        self.configurations: Dict[str, str] = {}

    def get_dict(self) -> dict:
        return {"username": self.username, "password_hash": self.password_hash, "configurations": self.configurations}

    @staticmethod
    def from_dict(d: dict):
        username = d["username"]
        password_hash = d["password_hash"]
        user = User(username, password_hash)
        user.configurations = d["configurations"]
        return user


# TODO make it not necessary to load and write the users everytime
def get_users() -> Dict[str, User]:
    raw_json = None
    if not DATABASE_PATH.exists():
        return {}

    with open(DATABASE_PATH) as f:
        raw_json = json.load(f)

    return {k: User.from_dict(v) for k, v in raw_json.items()}


def save_users(users: Dict[str, User]) -> None:
    json_dict = {k: v.get_dict() for k, v in users.items()}
    with open(DATABASE_PATH, "w") as f:
        json.dump(json_dict, f)


@app.route("/")
def home():
    # Check if the user is logged in
    if "username" in session:
        return render_template("home.html", username=session["username"])
    return redirect(url_for("login"))


@app.route("/signup", methods=["GET", "POST"])
def signup():
    try:
        db_lock.acquire()

        users = get_users()

        if request.method == "POST":
            username = request.form["username"]
            password = request.form["password"]
            confirm_password = request.form["confirm_password"]

            # Basic validation
            if username in users:
                flash("Username already exists!", "danger")
                return redirect(url_for("signup"))

            if password != confirm_password:
                flash("Passwords do not match!", "danger")
                return redirect(url_for("signup"))

            # Hash the password and store it
            hashed_password = security.generate_password_hash(password)
            new_user = User(username, hashed_password)
            users[username] = new_user
            flash("Account created successfully!", "success")
            save_users(users)

            return redirect(url_for("login"))

        return render_template("signup.html")
    finally:
        db_lock.release()
        print("Signup: released lock")


@app.route("/login", methods=["GET", "POST"])
def login():
    try:
        db_lock.acquire()

        users = get_users()

        if request.method == "POST":
            username = request.form["username"]
            password = request.form["password"]

            # Validate the credentials
            if username in users and security.check_password_hash(users[username].password_hash, password):
                session["username"] = username
                flash("Login successful!", "success")
                return redirect(url_for("home"))
            else:
                flash("Invalid credentials!", "danger")
                return redirect(url_for("login"))

        return render_template("login.html")
    finally:
        db_lock.release()
        print("Login: released lock")


@app.route("/logout")
def logout():
    # Logout and clear the session
    session.pop("username", None)
    flash("You have been logged out!", "info")
    return redirect(url_for("login"))


if __name__ == "__main__":
    app.run(debug=True)

