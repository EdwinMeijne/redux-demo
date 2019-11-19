describe('Gebruikerspagina', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
      response: [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
        },
      ],
      delay: 10, // Give cypress a little bit of time to find the loading indicator
    }).as('gebruikersList');
    cy.visit('http://localhost:4200/gebruikers');
  });

  it('shows a loading text', () => {
    cy.get('[data-cy=loading]').should('be.visible');
  });

  it('shows a list of users', () => {
    // Waits for loading
    cy.wait('@gebruikersList');
    cy.get('ul > li').should('be.visible');
    cy.get('li:nth-child(2)').contains('Ervin');
  });
});
