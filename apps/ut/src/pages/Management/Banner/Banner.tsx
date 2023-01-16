/* eslint-disable no-async-promise-executor */
import React, { useRef, useState } from "react";
import styles from "./style.module.scss";
import PageWrapper from "@/components/PageWrapper";
import { Button, Modal, Table } from "antd";
import EditModal from "./EditModal";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

export default () => {
  const [config, setConfig] = useState({
    open: false,
    title: "新建",
    width: "34%",
    destroyOnClose: true,

    row: {},

    onCancel: () => setConfig({ ...config, open: false }),
  });

  const columns = [
    {
      title: "展示顺序",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "状态",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "操作人",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "操作时间",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "操作",
      render: (record: any) => [
        <Button
          type="link"
          key="edit"
          onClick={() => setConfig({ ...config, open: true, row: { id: 111 } })}
        >
          编辑
        </Button>,
        <Button
          type="link"
          key="stop"
          onClick={async () => {
            Modal.confirm({
              title: "提示",
              icon: <ExclamationCircleOutlined />,
              content: `是否停用 【${record.name || ""}】? `,
              onOk() {
                return new Promise(async (resolve, reject) => {
                  resolve(0);

                  //   var res = await enablePriceBook({
                  //     id: record.id,
                  //     status: 0,
                  //   });

                  //   if (typeof res === "string") {
                  //     message.success("操作成功!");
                  //     action.reload();
                  //     resolve();
                  //   } else {
                  //     message.error(res.msg);
                  //     reject(res.msg);
                  //   }
                });
              },
              onCancel() {
                console.log("Cancel");
              },
            });
          }}
        >
          停用
        </Button>,
        <Button
          type="link"
          key="start"
          onClick={async () => {
            Modal.confirm({
              title: "提示",
              icon: <ExclamationCircleOutlined />,
              content: `是否停用 【${record.name || ""}】? `,
              onOk() {
                return new Promise(async (resolve, reject) => {
                  resolve(0);

                  //   var res = await enablePriceBook({
                  //     id: record.id,
                  //     status: 0,
                  //   });

                  //   if (typeof res === "string") {
                  //     message.success("操作成功!");
                  //     action.reload();
                  //     resolve();
                  //   } else {
                  //     message.error(res.msg);
                  //     reject(res.msg);
                  //   }
                });
              },
              onCancel() {
                console.log("Cancel");
              },
            });
          }}
        >
          启用
        </Button>,
        <Button
          type="link"
          key="del"
          onClick={async () => {
            Modal.confirm({
              title: "提示",
              icon: <ExclamationCircleOutlined />,
              content: `是否删除 【${record.name || ""}】? `,
              onOk() {
                return new Promise(async (resolve, reject) => {
                  resolve(0);

                  //   var res = await enablePriceBook({
                  //     id: record.id,
                  //     status: 0,
                  //   });

                  //   if (typeof res === "string") {
                  //     message.success("操作成功!");
                  //     action.reload();
                  //     resolve();
                  //   } else {
                  //     message.error(res.msg);
                  //     reject(res.msg);
                  //   }
                });
              },
              onCancel() {
                console.log("Cancel");
              },
            });
          }}
        >
          删除
        </Button>,
        <Button type="link" key="up">
          上移
        </Button>,
        <Button type="link" key="down">
          下移
        </Button>,
      ],
    },
  ];

  return (
    <div className={styles.right}>
      <div className={styles.btns}>
        <Button
          type="primary"
          key="edit"
          onClick={() => setConfig({ ...config, open: true })}
        >
          新建
        </Button>
      </div>

      <Table
        dataSource={dataSource}
        columns={columns}
        size="small"
        rowClassName={(record: any, index) =>
          record.type !== 1 ? styles.gray : ""
        }
      />

      <EditModal {...config} />
    </div>
  );
};
