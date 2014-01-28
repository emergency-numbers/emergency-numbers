
COMPONENT = node_modules/.bin/component


build: components index.js
	@$(COMPONENT) build --dev

components: component.json
	@$(COMPONENT) install --dev

clean:
	rm -fr build components node_modules

test:
	open test/index.html


.PHONY: clean test

