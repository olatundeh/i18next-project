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
            }
        },
        de: {
            translation: {
                key: "hallo Welt"
            }
        },
        'de-CH': {
            translation: {
                //key: "hoi Walt"
            }
        }
    }
});

const ret = i18next.t('look.depper', { lng: 'de-CH' });
console.log(ret);