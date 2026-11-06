/* DADOS DO SITE — edite aqui (ou use admin.html para gerar este arquivo).
   Campos vazios ("" ou []) não aparecem no site. Nada foi inventado.
   Exemplo de produto (copie dentro de "produtos"):
   {nome:"Nome do produto", categoria:"racoes", descricao:"...", preco:49.9, imagem:"img/pet-stop/produto1.jpg"}
   preco: número (49.9) ou null para ocultar. categoria: racoes | acessorios | brinquedos | higiene | cuidados.
   whatsapp: DDD + número, ex.: "77999999999". instagram: "@usuario". maps: link opcional (se vazio, usa o endereço).
   Para cadastrar um novo pet shop: copie um bloco, troque o "id" (sem espaços ou acentos) e preencha. */
window.CONQUISTA = {
  site: { hero: "", instagram: "", whatsapp: "", email: "" },
  categorias: [
    { id: "racoes", nome: "Rações", icone: "🥣" },
    { id: "acessorios", nome: "Acessórios", icone: "🦴" },
    { id: "brinquedos", nome: "Brinquedos", icone: "🎾" },
    { id: "higiene", nome: "Higiene", icone: "🛁" },
    { id: "cuidados", nome: "Cuidados", icone: "💚" }
  ],
  petshops: [
    {id:"pet-stop",nome:"Pet Stop",destaque:true,logo:"",fotos:[],bairro:"",endereco:"",horario:"",whatsapp:"",instagram:"",maps:"",
     descricao:"",servicos:[],produtos:[]},
    {id:"bicho-mimado",nome:"Bicho Mimado",destaque:true,logo:"",fotos:[],bairro:"",endereco:"",horario:"",whatsapp:"",instagram:"",maps:"",
     descricao:"",servicos:[],produtos:[]},
    {id:"pata-pet",nome:"Pata Pet",destaque:true,logo:"",fotos:[],bairro:"",endereco:"",horario:"",whatsapp:"",instagram:"",maps:"",
     descricao:"",servicos:[],produtos:[]},
    {id:"pet-vida",nome:"Pet Vida",destaque:true,logo:"",fotos:[],bairro:"",endereco:"",horario:"",whatsapp:"",instagram:"",maps:"",
     descricao:"",servicos:[],produtos:[]},
    {id:"pet-e-repete",nome:"Pet e Repete",destaque:true,logo:"",fotos:[],bairro:"",endereco:"",horario:"",whatsapp:"",instagram:"",maps:"",
     descricao:"",servicos:[],produtos:[]}
  ]
};
