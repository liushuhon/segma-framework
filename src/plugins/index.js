import element_ui from './element_ui';

const plugins = [
    element_ui,
];

export default {
    install(Vue) {
        plugins.forEach(plugin => {
            Vue.use(plugin);
        });
    }
};
