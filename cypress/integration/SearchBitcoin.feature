Feature: SearchBitcoin

    Como usuário, desejo pesquisar Bitcoin no buscador DuckDuckGo
    Para que possa me informar
  
Scenario: Pesquisando e utilizando ENTER
    Given que acesse o site
    When escreva "Bitcoin"
    And aperte "ENTER"
    Then deve ver mais de "10" resultados

Scenario: Pesquisando e utilizando clicando na lupa
    Given que acesse o site
    When escreva "Bitcoin"
    And aperte "na lupa"
    Then deve ver mais de "10" resultados

Scenario: Pesquisando pelo formulário
    Given que esceva o site
    And concactene com "Bitcoin"
    Then deve ver mais de "10" resultados