<template>
  <form class="form-container" @submit.prevent="submitForm">
    <div v-for="(field, key) in fields" :key="key" class="form-group">
      <label :for="key" class="form-label">{{ field.label }}</label>
      
      <slot 
        :name="key" 
        v-bind="{ 
          field, 
          modelValue: model[key], 
          update: (value: string | number | boolean) => model[key] = value 
        }"
      >
        <input 
          v-if="field.type === 'input'" 
          :id="key" 
          v-model="model[key]" 
          class="form-input"
          :type="field.inputType || 'text'" 
        />

        <textarea 
          v-else-if="field.type === 'textarea'" 
          :id="key" 
          v-model="model[key]" 
          class="form-textarea"
        ></textarea>

        <select 
          v-else-if="field.type === 'select'" 
          :id="key" 
          v-model="model[key]" 
          class="form-select"
        >
          <option v-for="option in field.options" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>

        <div v-else-if="field.type === 'checkbox'" class="form-checkbox">
          <input type="checkbox" :id="key" v-model="model[key]" />
          <span>{{ field.label }}</span>
        </div>
      </slot>
    </div>

    <div class="form-buttons">
      <button type="submit" class="btn btn-submit">Сохранить</button>
      <button type="button" class="btn btn-cancel" @click="cancelForm">Отмена</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ 
  fields: Record<string, any>;
  model: Record<string, any>;
}>();

const emit = defineEmits(['update:model', 'submit', 'cancel']);

const submitForm = () => {
  emit('submit', props.model);
};

const cancelForm = () => {
  emit('cancel');
};
</script>

<style lang="scss" scoped>
.form-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-input, 
.form-textarea, 
.form-select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  transition: 0.3s;
  box-sizing: border-box;
}

.form-input:focus, 
.form-textarea:focus, 
.form-select:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.form-textarea {
  height: 100px;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.btn {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;
}

.btn-submit {
  background: #28a745;
  color: white;
}

.btn-cancel {
  background: #dc3545;
  color: white;
}

.btn:hover {
  opacity: 0.8;
}
</style>
