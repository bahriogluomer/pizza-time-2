/* eslint-disable no-undef */
describe('Home page', () => {
  it('Opens the app ', () => {
    cy.visit("http://localhost:5173")
  })
  it("navigates to orderpage when clicked on the button", () => {
    //Arrange
    cy.visit("http://localhost:5173");
  
    //Act
    cy.get('[data-test-id="hungry-button"]').click();
  
    //Assert
    cy.url().should("be.equal", "http://localhost:5173/order");
  });
  
});

describe('Order page', ()=> {
  //when clicked on button should get size-error, name-error and crust-error 
  //when size is selected but crust is not selected and name is not entered should get crust-error and name-error
  //when size is selected and name is entered should get crust-error
  //when more than 10 topping checkboxes are selected should get toppings-error
  //when form is valid and submitted url should be.equal to "http://localhost:5173/success"
})


