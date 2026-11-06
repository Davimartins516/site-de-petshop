# Conquista Pet

Guia de pet shops de Vitória da Conquista (BA). Site estático: HTML + CSS + JavaScript, sem build e sem serviços pagos.

## Publicar no GitHub Pages
1. Crie um repositório e envie todos os arquivos desta pasta para a raiz.
2. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. O site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Como preencher os dados
Todos os dados ficam em `data/petshops.js` (exemplo de produto no topo do arquivo). Campos vazios não aparecem no site.
Você pode editar o arquivo direto ou abrir `admin.html`, editar os formulários e clicar em **Baixar petshops.js**; depois substitua o arquivo em `data/` e faça o commit.
`admin.html` não tem login e não salva nada online: ela só gera o arquivo atualizado.

## Imagens
Coloque as fotos em `img/` (ex.: `img/pet-stop/fachada.jpg`) e informe o caminho em `logo`, `fotos` e `imagem` de cada produto. Use apenas imagens com autorização da loja. Sem imagem, o site mostra um espaço reservado verde. Foto do banner: campo `site.hero`.

## Novo pet shop
Copie um bloco em `petshops`, troque o `id` (minúsculas, sem espaços) e preencha. A página `loja.html?l=ID` é criada automaticamente.
