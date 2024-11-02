PYTHON = python3
GENERATE_LAYOUT = submodules/scripts/generate_layout.py
KEYBOARD_LAYOUT_JSON = submodules/scripts/resources/keyboard-layout.json

all: public/main.js

src/Generated/Layout.elm: $(KEYBOARD_LAYOUT_JSON) $(GENERATE_LAYOUT)
	mkdir -p $(@D)
	$(PYTHON) $(GENERATE_LAYOUT) -i $(KEYBOARD_LAYOUT_JSON) -l elm -o $@

public/main.js: src/Generated/Layout.elm $(wildcard src/*.elm) $(wildcard src/**/*.elm)
	elm make src/Main.elm --output $@

open: public/main.js
	open public/index.html

deploy: $(wildcard public/*.*)
	cp -r public/* docs/

clean:
	rm -rf src/Generated
	rm -f index.html
