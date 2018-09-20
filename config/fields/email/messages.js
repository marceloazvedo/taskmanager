const LANG_DEFAULT = 'pt-br'

const MESSAGES = {
    'pt-br': 'O {PATH} "{VALUE}" não é válido!',
    'en': 'The {PATH} "{VALUE}" is NOT valid!',
    'es': 'El {PATH} "{VALUE}" no es válido!'
}

module.exports = (lang) =>
    (Object.keys(MESSAGES).includes(lang))
        ? MESSAGES[lang]
        : MESSAGES[LANG_DEFAULT]