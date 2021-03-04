describe("Make sure site loads", () => {
  it("Page loads", () => {
    cy.visit("http://localhost:3000/");
    cy.contains(/create an ibm account/i);

    cy.get("[data-testid=register-email-input]")
      .type("test@gmail.com")
      .blur();

    cy.get("[data-testid=register-password-input]")
      .type("Test!123")
      .blur();
      console.log('hello')
  });
});
