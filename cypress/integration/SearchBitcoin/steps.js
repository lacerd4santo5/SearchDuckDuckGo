var interes

Given(/^que acesse o site$/, () => {
	cy.visit('/');
});

Given(/^que esceva o site$/, () => {
	return true;
});

When(/^concactene com "([^"]*)"$/, (concate) => {
	cy.visit('/' + concate)
});

When(/^escreva "([^"]*)"$/, (interesse) => {
	interes = interesse
});

When(/^aperte "([^"]*)"$/, (pesquisar) => {
	if (pesquisar === 'ENTER') {
		cy.get('#search_form_input_homepage').type(`${interes}{enter}`);
	}
	else {
		cy.get('#search_form_input_homepage').type(interes);
		cy.get('#search_button_homepage').click();
	}
	;
});

Then(/^deve ver mais de "([^"]*)" resultados$/, (result) => {
	cy.get('div.nrn-react-div').should(($article) => {
		expect($article).to.be.length(result)
	});

})
