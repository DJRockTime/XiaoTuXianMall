import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";

export const useCounterStore = defineStore("counter", () => {
    const API_URL = "http://localhost";

    // 定义state
    const count = ref(0);

    const increment = () => {
        count.value++;
    };

    // getters 定义
    const doubleCount = computed(() => {
        count.value++;
    });

    // 定义action
    const list = ref([]);
    const getList = async () => {
        const res = await axios.get(API_URL);
        list.value = res.data.data.channels;
    };

    return {
        count,
        increment,
        doubleCount,
        list,
        getList
    };
});
