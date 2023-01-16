import React, { useEffect } from "react";
import { Button, Form, Input, Modal, Upload } from "antd";

const EditModal = (props: any) => {
  const [form] = Form.useForm();

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  //   const checkFile = async (rule: any, value: any, callback: any) => {
  //     console.log("value -> :", value);
  //     if (!value || !value.length) {
  //       return Promise.reject("请上传图片");
  //     } else {
  //       return Promise.resolve();
  //     }
  //   };
  useEffect(() => {
    if (props.open) {
      if (props.row?.id) {
        form.setFieldsValue({
          name: "1111",

          file: [
            {
              uid: "1",
              name: "xxx.png",
            },
          ],
        });
      }
    }

    return () => {
      return;
    };
  }, [props.open]);

  return (
    <Modal
      {...props}
      onOk={async () => {
        const values = await form.validateFields();
        console.log("values -> :", values);

        // props.onCancel();
      }}
    >
      <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 19,
        }}
        autoComplete="off"
        form={form}
        preserve={false}
      >
        <Form.Item label="展示顺序">8</Form.Item>

        <Form.Item
          label="名称"
          name="name"
          rules={[
            {
              required: true,
              message: "请填写名称",
              transform: (value: string) => value?.trim(),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="file"
          label="上传图片"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="仅支持上传小于xxM，格式为xxxx"
          rules={[
            {
              required: true,
              message: "请上传图片",
              //   validator: (rule, value, callback) =>
              //     checkFile(rule, value, callback),
            },
          ]}
        >
          <Upload
            name="logo"
            accept=""
            beforeUpload={() => false}
            listType="text"
          >
            <Button type="link">点击上传</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="PC端链接"
          name="name"
          rules={[
            {
              required: true,
              message: "请填写PC端链接",
              transform: (value: string) => value?.trim(),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="移动端链接"
          name="name"
          rules={[
            {
              required: true,
              message: "请填写移动端链接",
              transform: (value: string) => value?.trim(),
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
