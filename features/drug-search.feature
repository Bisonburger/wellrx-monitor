Feature: Searching for drug locations
  As a WellRx user who is not signed in
  I want to search for a drug for a given location

  Scenario Outline:  Search with a valid address
    When I search for "<drug>" at location "<address>"
    Then I should see results for "<drug>"

    Examples:
    |drug|address|
    |LOSARTAN POTASSIUM|85749|
    |LIPITOR|17756|
