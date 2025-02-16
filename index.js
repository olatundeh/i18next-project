import i18next from 'i18next';

i18next.init({
    fallbackLng: 'en',
    fallbackNS: 'common',
    resources: {
        en: {
            translation: {
                key: "{{what}} is {{-how}}"
            }
        }
    }
});

const code = 403;
const ret = i18next.t('key', {what: 'i18next', how: '<i>awesome</i>'});
console.log(ret);