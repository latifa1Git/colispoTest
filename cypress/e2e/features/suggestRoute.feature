Feature: suggest route

    Background:
        Given I Login the application
    Scenario: Suggest Route
        When I navigate to the suggest route page
        And I suggest a route
        Then I should see the success message