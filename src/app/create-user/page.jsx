"use client";

import React, { useState, useEffect } from "react";
import { Steps, Button, Form, Input, Select, message } from "antd";

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [savedData, setSavedData] = useState({});
  const [messageApi, contextHolder] = message.useMessage();

  const success = (msg) => {
    messageApi.open({
      type: "success",
      content: msg,
    });
  };

  const steps = [
    { title: "Step 1", fields: ["name", "email", "phone", "gender"] },
    { title: "Step 2", fields: ["address", "city", "state"] },
    { title: "Step 3", fields: ["zip", "country", "notes"] },
  ];

  console.log(steps, "stepss")

  // Load saved data from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("stepperData");
      if (data) {
        setSavedData(JSON.parse(data));
      }
    }
  }, []);

  useEffect(() => {
    // Populate form fields when currentStep changes
    const currentStepData = savedData[`step${currentStep}`] || {};
    form.setFieldsValue(currentStepData);
  }, [currentStep, savedData, form]);

  const saveDataToLocalStorage = (step, data) => {
    const updatedData = { ...savedData, [`step${step}`]: data };
    setSavedData(updatedData);
    localStorage.setItem("stepperData", JSON.stringify(updatedData));
    success(`Step ${step + 1} data saved!`);
  };

  const onNext = async () => {
    try {
      const values = await form.validateFields();
      saveDataToLocalStorage(currentStep, values);
      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      message.error("Please complete all fields!");
    }
  };

  const onPrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <>
      {contextHolder}
      <div className="mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
        <Steps current={currentStep} className="mb-5">
          {steps.map((step, index) => (
            <Steps.Step key={index} title={step.title} />
          ))}
        </Steps>

        <Form form={form} layout="vertical">
          <div className="grid grid-cols-3 gap-4">
            {steps[currentStep].fields.map((field) => (
              <Form.Item
                key={field}
                name={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                rules={[{ required: true, message: `${field} is required` }]}
              >
                {field === "gender" ? (
                  <Select placeholder="Select Gender">
                    <Select.Option value="Male">Male</Select.Option>
                    <Select.Option value="Female">Female</Select.Option>
                  </Select>
                ) : (
                  <Input />
                )}
              </Form.Item>
            ))}
          </div>
        </Form>

        <div className="flex justify-between mt-5">
          <Button
            type="primary"
            disabled={currentStep === 0}
            onClick={onPrevious}
          >
            Previous
          </Button>
          {currentStep < steps.length - 1 ? (
            <Button type="primary" onClick={onNext}>
              Next
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={async () => {
                try {
                  const values = await form.validateFields();
                  saveDataToLocalStorage(currentStep, values);
                  message.success("All steps completed! Data saved.");
                } catch (error) {
                  message.error("Please complete all fields!");
                }
              }}
            >
              Finish
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default StepperForm;
