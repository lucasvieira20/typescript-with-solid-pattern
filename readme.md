Código feito com base na video-aula do @rodrigobranas, com abordagem do padrão SOLID.

# Principios S.O.L.I.D
SOLID é um acrônimo para os princípios listados abaixo:

## Single Responsability
    - Uma classe deve ter exclusivamente uma responsabilidade;
    - Alterar um código nessa classe não deve influenciar o funcionamento de outros códigos;
    - Classes com uma única responsabilidade são mais legíveis e testáveis;

## Open Closed Principle
    - As entidades da aplicação devem ser abertas para extensão;
    - As entidades da aplicação devem ser **fechadas para modificações**;
## Liskov Substitution Principle
    Esse princípio defende o uso de polimorfismo, assim como usamos no princípio anterior, para estabelecer que um objeto pode ser substituído por qualquer outro do mesmo tipo sem danificar o comportamento da aplicação.

    Já que estamos utilizando TypeScript com suporte às interfaces, o mesmo já vai nos avisar de qualquer erro ferindo esse princípio.

## Interface Segregation Principle
    - Múltiplas interfaces específicas são melhores do que uma interface com múltiplas definições.
## Dependency Inversion Principle
    - Classes de nível superior não devem depender diretamente de outras classes de nível inferior e sim de interfaces.