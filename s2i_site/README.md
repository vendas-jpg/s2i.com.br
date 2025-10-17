
# Site estático — S2i Distribuição Industrial

Pronto para publicar no **GitHub Pages**.

## Como publicar

1. Crie um repositório no GitHub (ex.: `s2i-site`).
2. Faça upload de **todo o conteúdo** desta pasta para o repositório (mantenha a estrutura de diretórios).
3. No GitHub, acesse **Settings › Pages** e selecione:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (ou `master`) / root (`/`)
4. Acesse: `https://<seu-usuario>.github.io/` (ou `https://<seu-usuario>.github.io/<nome-do-repo>/` se não usar repositório de usuário).
5. Edite `sitemap.xml` e `robots.txt` substituindo `<seu-usuario>` pelo seu usuário do GitHub.
6. Substitua `/assets/s2i-logo.svg` pelo logo oficial da S2i quando desejar.
7. Para customizar o domínio (opcional), crie um arquivo `CNAME` com `www.s2i.com.br` e aponte o DNS para o GitHub Pages.

## Estrutura
- Páginas principais: Home, Nossa História, Propósito, Estrutura (Goiânia), Valores, Engenharia & Serviços, Fabricantes, Clientes, Contato.
- Páginas regionais (SEO): GO, MT, MS, MG (Sul & Triângulo), RO (em `/regioes/`).
- `robots.txt` e `sitemap.xml` já incluídos.

_Atualizado em 2025-10-17_
