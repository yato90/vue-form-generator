<template>
    <div>
      <h1>Форма регистрации</h1>
      <FormGenerator :fields="formFields" v-model:model="formData" @submit="handleSubmit" @cancel="handleCancel" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FormGenerator from '../components/FormGenerator.vue';

const formFields = {
  username: { label: 'Имя пользователя', type: 'input' as const },
  password: { label: 'Пароль', type: 'input' as const, inputType: 'password' },
  email: { label: 'Email', type: 'input' as const, inputType: 'email' },
  terms: { label: 'Согласен с условиями', type: 'checkbox' as const }
};

const formData = ref({ username: '', password: '', email: '', terms: false });

const handleSubmit = (data: any) => {
    console.log('Данные формы:', data);
};

const handleCancel = () => {
    console.log('Форма отменена');
};
</script>