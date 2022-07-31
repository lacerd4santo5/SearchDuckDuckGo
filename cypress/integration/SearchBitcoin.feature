Feature: SearchBitcoin

    Como usuário, desejo pesquisar Bitcoin no buscador DuckDuckGo
    Para que possa me informar

Scenario: Pesquisando e utilizando ENTER
    Given que eu acesso o site
    When escrevo "Bitcoin"
    And aperto "ENTER"
    Then devo ver mais de "10" resultados
@focus
Scenario: Pesquisando e utilizando clicando na lupa
    Given que eu acesso o site
    When escrevo "Bitcoin"
    And aperto "na lupa"
    Then devo ver mais de "2" resultados

Scenario: Pesquisando pelo formulário
    Given que eu esceva o site
    And concacteno com "Bitcoin"
    Then devo ver os "20" resultados