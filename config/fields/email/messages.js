const LANG_DEFAULT = 'pt-br'

const MESSAGES = {
    'pt-br': 'email.invalid',
    'en': 'The {PATH} "{VALUE}" is NOT valid!',
    'es': 'El {PATH} "{VALUE}" no es válido!'
}

module.exports = (props, lang) => 'emailInvalid'
    // Object.keys(MESSAGES).includes(lang) ? MESSAGES[lang] : MESSAGES[LANG_DEFAULT]
    //     .replace('{PATH}', props.path)
    //     .replace('{VALUE}', props.value)