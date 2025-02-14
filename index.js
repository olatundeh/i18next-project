import i18next from 'i18next';

i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                "key": "hello World"
            }
        },
        de: {
            translation: {
                "key": "hallo Welt"
            }
        }
    }
});

const ret = i18next.t('key', { lng: 'en' });
console.log(ret); // hello World