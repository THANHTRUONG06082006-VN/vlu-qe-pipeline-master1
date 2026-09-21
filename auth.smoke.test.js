const { login } = require('./auth');

describe('Smoke Test - Core Authentication', () => {
  test('Đăng nhập thành công với tài khoản hợp lệ (admin/123)', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
