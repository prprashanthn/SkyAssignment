Feature: Navigating and Usage of Sky shop page

    Scenario Outline: To verify user is able to navigate to Shop Page
        Given User is on Home Page
        When User clicks on "Deals"
        Then User should navigate to "<url>"

        Examples:
            | url                       |
            | https://www.sky.com/deals |

    Scenario: To verify user is taken to 'Create your My Sky password' screen tries to login with invalid credentails
        Given User is on Home Page
        When  User clicks on "Sign in"
        And   User enters invalid credentails "test@123"
        And   User clicks on "Continue"
        Then  User should displayed a box with text "Create your My Sky password"

    Scenario Outline: To verify user is displayed with list of deals on the deals page
        Given User is on Home Page
        When  User clicks on "Deals"
        Then  User should be displayed with list of deals and prices "<prices>"

        Examples:
            | prices   |
            | 26_41_46 |