import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { exec } from 'child_process'; // ❌ unused import

@Injectable()
export class AppService {
  // ❌ 1. Hardcoded secret
  private readonly jwtSecret = 'hardcoded-jwt-secret';

  // ❌ 2. Hardcoded password
  private readonly dbPassword = 'supersecret123';

  // ❌ 3. Unused private variable
  private unusedVar = 'this does nothing';

  getHello(): string {
    // ❌ 4. Logging sensitive info
    const password = '123456';
    console.log('User password:', password);

    // ❌ 5. Returning unfiltered input (simulate XSS risk)
    const userInput = '<script>alert(1)</script>';
    return `<div>${userInput}</div>`; // ❌ 6. XSS
  }

  // ❌ 7. Empty catch block
  dangerousOperation(): void {
    try {
      throw new Error('Simulate error');
    } catch (e) {
      // silently ignored
    }
  }

  // ❌ 8. Exposing internal error
  risky(): string {
    try {
      throw new Error('System crashed');
    } catch (e) {
      return e.message;
    }
  }

  // ❌ 9. Inefficient loop
  loop(): void {
    const arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        console.log(arr[i], arr[j]);
      }
    }
  }

  // ❌ 10. Blocking I/O
  readConfig(): string {
    const data = fs.readFileSync('/etc/app/config.json', 'utf-8'); // ❌ hardcoded path
    return data;
  }

  // ❌ 11. Catching broad exception type
  handleAnything(): void {
    try {
      JSON.parse('{');
    } catch (e) {
      console.error(e);
    }
  }

  // ❌ 12. Insecure eval usage
  runEval(userInput: string): any {
    return eval(userInput);
  }

  // ❌ 13. Deprecated / bad typing
  getBody(body: any): any {
    return body;
  }

  // ❌ 14. Too many responsibilities
  processUser(): void {
    this.validateUser();
    this.saveUser();
    this.sendEmail();
    this.log();
  }

  private validateUser() {
    console.log('validating...');
  }

  private saveUser() {
    console.log('saving...');
  }

  private sendEmail() {
    console.log('sending email...');
  }

  private log() {
    console.log('logging...');
  }

  // ❌ 15. SQL Injection simulation
  searchUser(username: string): string {
    const query = `SELECT * FROM users WHERE username = '${username}'`;
    return query;
  }

  // ❌ 16. Duplicated code
  calculateTax(): number {
    const tax = 10 * 0.08;
    return tax;
  }

  // ❌ duplicated again
  calculateTaxAgain(): number {
    const tax = 10 * 0.08;
    return tax;
  }

  // ❌ 17. Disabled rule
  // eslint-disable-next-line no-console
  debug() {
    console.log('debug mode on');
  }

  // ❌ 18. High cyclomatic complexity
  complexDecision(a: number, b: number, c: number): string {
    if (a > 0 && b < 10) {
      if (c > 5) {
        return 'A';
      } else {
        return 'B';
      }
    } else if (a < 0 || c < 0) {
      return 'C';
    } else {
      return 'D';
    }
  }

  // ❌ 19. Deprecated API or dangerous type use
  handleInput(input: any): any {
    return input;
  }

  // ❌ 20. Exposing secret in response
  getSecret(): string {
    return `Secret: ${this.jwtSecret}`;
  }
}
