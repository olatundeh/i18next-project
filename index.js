import i18next from 'i18next';

i18next.init({
    fallbackLng: 'en',
    fallbackNS: 'common',
    resources: {
        en: {
            translation: {
                key: "hello World",
                look: {
                    depper: "some deep key"
                },
                error: {
                    404: "not found",
                    unknown: "an error occurred"
                }
            },
            common: {
                save: "Save",
                cancel: "Cancel"
            }
        },
        de: {
            translation: {
                key: "hallo Welt"
            },
            common: {
                save: "Save",
                cancel: "Abbrechen"
            }
        },
        'de-CH': {
            translation: {
                //key: "hoi Walt"
            }
        }
    }
});

const code = 403;
const ret = i18next.t([`error.${code}`, 'error.unknown']);
console.log(ret);