<template>
    <div>
      <h1>Форма обратной связи</h1>
      <FormGenerator :fields="formFields" v-model:model="formData" @submit="handleSubmit" @cancel="handleCancel" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FormGenerator from '../components/FormGenerator.vue';

const formFields = {
    name: { label: 'Ваше имя', type: 'input' as const },
    feedback: { label: 'Отзыв', type: 'textarea' as const },
    rating: { 
        label: 'Оценка', 
        type: 'select' as const, 
        options: [
            { value: '1', label: '1 - Плохо' },
            { value: '2', label: '2 - Удовлетворительно' },
            { value: '3', label: '3 - Хорошо' },
            { value: '4', label: '4 - Очень хорошо' },
            { value: '5', label: '5 - Отлично' }
        ]
    }
};

const formData = ref({ name: '', feedback: '', rating: '' });

const handleSubmit = (data: any) => {
    console.log('Отправленный отзыв:', data);
};

const handleCancel = () => {
    console.log('Форма отменена');
};
</script>
  