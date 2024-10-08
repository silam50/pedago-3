export function renderRegister(): string {
    try {
        return `
        <div>
        <div class="container">
        <h1>Register</h1>
        <form id="registerForm" class="mb-3">
            <label for="fullName">Full Name:</label><br>
            <input type="text"   class="form-control"  id="fullName" name="fullName" required><br>

            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br>
            
            <label for="phone">Phone:</label><br>
            <input type="text" id="phone" name="phone" required><br>

            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password" required><br>

            <label for="repeatPassword">Repeat Password:</label><br>
            <input type="password" id="repeatPassword" name="repeatPassword" required><br>

            <button type="submit">Register</button>
        </form>
        </div>
        </div>
    `;
    } catch (error) {
        console.error(error);
        return "";
    }
}

