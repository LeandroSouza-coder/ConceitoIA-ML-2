# Recebe a Entrada do usuário e armazena na variável "entrada"
entrada = input()

# Função responsável por receber um conceito e retornar sua respectiva descrição.
def descrever_conceito(conceito):
    if conceito == "aprendizado supervisionado":
        return "método de treinamento de modelos com dados rotulados"
    elif conceito == "redes neurais":
        return "sistemas computacionais inspirados no funcionamento do cérebro humano"
    elif conceito == "aprendizado por reforço":
        return "aprendizado baseado em recompensas e punições"
    elif conceito == "aprendizado não supervisionado":
        return "descoberta de padrões em dados não rotulados"
    else:
        return "Conceito não reconhecido"

# Imprime a descrição do conceito recebido na "entrada" através da função "descrever_conceito".  
print(descrever_conceito(entrada))
