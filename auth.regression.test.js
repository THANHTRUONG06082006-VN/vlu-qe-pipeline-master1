const { login } = require('./auth');

describe('Regression Test - Extended Authentication Scenarios', () => {
  test('Thất bại khi sai mật khẩu', () => {
    expect(login('admin', 'wrong_pass')).toBe(false);
  });

  test('Thất bại khi username rỗng', () => {
    expect(login('', '123')).toBe(false);
  });

  test('Thất bại khi password rỗng', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('Thất bại với tài khoản bị khóa', () => {
    expect(login('locked_user', '123')).toBe(false);
  });

  test('Thất bại khi chứa ký tự đặc biệt sai định dạng', () => {
    expect(login('admin@#$%^', '123')).toBe(false);
  });
});
