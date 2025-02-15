Feature: suggest route

    Background:
        Given I Login the application
    Scenario: Suggest Route
        When I navigate to the suggest route page
        And I suggest a route
        Then I redirect to the home page