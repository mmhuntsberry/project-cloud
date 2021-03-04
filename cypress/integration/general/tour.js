describe("Make sure site loads", () => {
  it("Page loads", () => {
    cy.visit("http://localhost:3000/");
    cy.contains(/create an ibm account/i);
  });

  it("Continue button should be disabled initially", () => {
    cy.get("[data-testid=register-submit-button]").should(
      "have.attr",
      "disabled"
    );
  });

  it("Enters in valid email address", () => {
    cy.get("[data-testid=register-email-input]")
      .type("test@gmail.com")
      .blur();
  });

  it("Should show success icon", () => {
    cy.get("[data-testid=email-inline-loading-success]").should("be.visible");
  });
});
