export interface Team {
  id: number
  imagem: string
  nacionalidade: {
    nome: string
    bandeira: string
  }
  titulos: {
    id: number
    nome: string
    imagem: string
    peso: number
    qtdTitulos: number
  }[]
}
