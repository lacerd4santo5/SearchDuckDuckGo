Given(/^que eu acesso o site$/, () => {
	cy.visit('/');
});

Given(/^que eu esceva o site$/, () => {
	return true;
});

When(/^concacteno com "([^"]*)"$/, (concate) => {
	cy.visit('/'+concate)
});

When(/^escrevo "([^"]*)"$/, (interesse) => {
	console.log(interesse);
});

When(/^aperto "([^"]*)"$/, (pesquisar) => {
	if (pesquisar === 'ENTER') {
		cy.get('#search_form_input_homepage').type(`${interes}{enter}`);
	}
	else {
		cy.get('#search_form_input_homepage').type(interes);
		cy.get('#search_button_homepage').click();
	}
	;
});

Then(/^devo ver mais de "([^"]*)" resultados$/, (result) => {
	cy.get('div.nrn-react-div').should(($p) => {
		expect($p).to.be.lengthOf(result);		
	});
});

