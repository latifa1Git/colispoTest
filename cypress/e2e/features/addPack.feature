Feature: add pack

    Scenario: Add Pack
        Given I Login the application
        When I navigate to the add pack page
        And I add a pack
        Then I see the confirmation message