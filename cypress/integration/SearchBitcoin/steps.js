Given(/^que eu acesso o site$/, () => {
	cy.visit('/');
});


When(/^escrevo "([^"]*)"$/, (interesse) => {
	
});

When(/^aperto "([^"]*)"$/, (pesquisar) => {
	if (pesquisar === 'ENTER') {
		cy.get('#search_form_input_homepage').type('Bitcoin{enter}');
	}
	else {
		cy.get('#search_form_input_homepage').type('Bitcoin')
		cy.get('#search_button_homepage').click();
	}
	;
});

Then(/^devo ver mais de "([^"]*)" resultados$/, (result) => {
	cy.get('div.nrn-react-div').should(($p) => {
		expect($p).to.be.above(1);		
	});
});

