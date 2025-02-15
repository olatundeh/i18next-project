import i18next from 'i18next';

i18next.init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                key: "hello World",
                look: {
                    depper: "some deep key"
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
                cancel: "Cancel"
            }
        },
        'de-CH': {
            translation: {
                //key: "hoi Walt"
            }
        }
    }
});

const ret = i18next.t('save', { ns: 'common' });
console.log(ret);