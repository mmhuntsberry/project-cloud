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
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get("[data-testid=register-email-input]")
      .type("test@gmail.com")
      .blur()
      .wait(500)
      .get("[data-testid=register-password-input]")
      .type("Test!123");
  });

  it("Should show success icon", () => {
    cy.get("[data-testid=email-inline-loading-success]").should("be.visible");
  });

  it("Continue button should be enabled", () => {
    cy.get("[data-testid=register-submit-button]").should(
      "have.not.attr",
      "disabled"
    );
  });

  it("Should click on 'Continue' button", () => {
    cy.get("[data-testid=register-submit-button]").trigger("click", {
      force: true
    });
  });

  it("Should mount new component", () => {
    cy.get("[data-testid=verify-form]");
  });

  it("Should find button initial disabled", () => {
    cy.get("[data-testid=verify-submit-button]").should(
      "have.attr",
      "disabled"
    );
  });

  it("Should find input and enter in validation code", () => {
    cy.get("[data-testid=verify-validation-input]")
      .type("1234567")
      .blur();
  });

  it("Should find button initial disabled", () => {
    cy.get("[data-testid=verify-submit-button]").should(
      "have.not.attr",
      "disabled"
    );
  });

  it("Should click on 'Continue' button", () => {
    cy.get("[data-testid=verify-submit-button]").trigger("click", {
      force: true
    });
  });
});
