# target-sistemas-teste
Teste técnico para vaga de desenvolvedor na empresa Target Sistemas
--------------------------------------------------------------------

# Respostas das questões discursivas:

- # Questões:

3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

4) Descubra a lógica e complete o próximo elemento:
 - a) 1, 3, 5, 7, ___
 - b) 2, 4, 8, 16, 32, 64, ____
 - c) 0, 1, 4, 9, 16, 25, 36, ____
 - d) 4, 16, 36, 64, ____
 - e) 1, 1, 2, 3, 5, 8, ____
 - f) 2,10, 12, 16, 17, 18, 19, ____


5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  

- # Respostas:

3) O valor da variável SOMA ao final do processamento é 65

4) 
  - a) 1, 3, 5, 7, 9
  - b) 2, 4, 8, 16, 32, 64, 128
  - c) 0, 1, 4, 9, 16, 25, 36, 49
  - d) 4, 16, 36, 64, 100
  - e) 1, 1, 2, 3, 5, 8, 13
  - f) 2,10, 12, 16, 17, 18, 19, 200

5) Primeiro liga-se o primeiro interruptor e deixa-o ligado por um tempo até que a lâmpada esquente. Desliga-se esse interruptor e liga-se o segundo. Após isso visita-se uma sala:
      - se a lâmpada está apagada e quente: é controlada pelo primeiro interruptor
      - se a lâmpada está acesa: é controlada pelo segundo interruptor.
      - se a lâmpada está apagada e fria: é controlada pelo terceiro interruptor
    Após descobrir qual interruptor controla a primeira lâmpada, basta acender um dos dois interruptores que sobraram e visitar uma das outras salas. Se estiver apagada, o terceiro interruptor controla essa lâmpada e o que ficou aceso controla a terceira lâmpada, se estiver acesa então o interruptor escolhido controla essa segunda lâmpada.
