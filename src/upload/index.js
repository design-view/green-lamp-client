import "./upload.scss";
import 'antd/dist/antd.css'
import { Divider, Form, Input, InputNumber, Button } from "antd";
function UploadPage() {
    const onSubmit = (values) => {
        console.log(values);
    }
    return (
        <div id="upload" className="innerCon">
            <h2>상품등록하기</h2>
            <Form name="상품 업로드" onFinish={onSubmit}>
                <Form.Item name="upload" label={<div className="upload-label">사진등록</div>}>
                    <div id="upload-img">
                        <img src="/images/icons/camera.png" />
                        <span>이미지를 업로드 </span>
                    </div>
                </Form.Item>
                <Divider />
                <Form.Item name="seller" rules={[{
                    required: true, message: '판매자 이름을 입력주세요'
                }]}
                    label={<div className="upload-label">판매자명</div>}>
                    <Input size="large" placeholder="이름을 입력" />
                </Form.Item>
                <Divider />
                <Form.Item name="name" rules={[{
                    required: true, message: '판매자 이름을 입력주세요'
                }]}
                    label={<div className="upload-label">상품이름</div>}>
                    <Input size="large" placeholder="상품이름을 입력" />
                </Form.Item>
                <Divider />


                <Form.Item name="price" rules={[{ required: true, message: '가격을 입력주세요' }]}
                    label={<div className="upload-label">상품가격</div>}>
                    <InputNumber defaultValue={0} size="large" />
                </Form.Item>
                <Divider />
                <Form.Item
                    name="description"
                    label={<div>상품소개</div>}
                    rules={[{ required: true, message: "상품소개입력" }]}
                >
                    <Input.TextArea size="large"
                        id='description'
                        showCount
                        maxLength={300}
                        placeholder='상품소개를 적어주세요'
                    />
                </Form.Item>
                <Divider />
                <Form.Item>
                    <Button id="submit-button" size="large" htmlType="submit">
                        상품등록
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
}
export default UploadPage;