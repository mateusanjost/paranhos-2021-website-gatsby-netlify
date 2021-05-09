---
title: Contato
hide_title: false
sections:
  - type: form_section
    section_id: contact-form
    content: >+
      Vamos construir algo ótimo juntos. 


      Preencha nosso formulário de contato ou envie-nos um e-mail para
      contato@agenciaparanhos.com.br



    form_id: contactForm
    form_action: /thank-you
    form_fields:
      - type: form_field
        input_type: text
        name: name
        label: Nome
        default_value: Seu nome
        is_required: true
      - type: form_field
        input_type: email
        name: e-mail
        label: E-mail
        default_value: Digite o seu e-mail
        is_required: true
      - type: form_field
        input_type: select
        name: subject
        label: Em qual serviço está interessado?
        options:
          - Desenvolvimento
          - Mídia
          - Social media
      - type: form_field
        input_type: textarea
        name: message
        label: Mensagem
        default_value: Conte-nos o que precisa
      - type: form_field
        input_type: checkbox
        name: consent
        label: >-
          Eu entendo que este formulário está armazenando as minhas informações
          enviadas para que eu possa ser contatado.
    submit_label: ENVIAR
seo:
  type: stackbit_page_meta
  title: Contact
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
template: advanced
---
