package com.example.musicapp;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class SignIn extends AppCompatActivity {
    private EditText mEmailField;
    private EditText mPasswordField;

    private Button mLoginBtn;


    private FirebaseAuth mAuth;

    private FirebaseAuth.AuthStateListener mAuthListener;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_in);
        mAuth = FirebaseAuth.getInstance();

        mEmailField =(EditText) findViewById(R.id.emailField);
        mPasswordField =(EditText) findViewById(R.id.passwordField);

        mLoginBtn =(Button) findViewById(R.id.loginBtn);

        mAuthListener = new FirebaseAuth.AuthStateListener() {
            @Override
            public void onAuthStateChanged(@NonNull FirebaseAuth firebaseAuth) {

                if(firebaseAuth.getCurrentUser()!= null){
                    startActivity(new Intent(SignIn.this, Account.class));
                }
            }
        };


        mLoginBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                String email = mEmailField.getText().toString().trim();
                String password = mPasswordField.getText().toString().trim();

                if (TextUtils.isEmpty(email)) {
                    mEmailField.setError("Please enter an email address");
                    return;
                }

                if (TextUtils.isEmpty(password)) {
                    mPasswordField.setError("Please enter a Password");
                    return;
                }
                if(password.length()<6){
                    mPasswordField.setError("Password must be at least 6 characters");
                    return;
                }

                startSignIn();
            }
        });
    }
    public void register(View view){
        FirebaseAuth.getInstance().signOut();
        startActivity(new Intent(SignIn.this, Register.class));
        finish();

    }

    @Override
    protected void onStart() {
        super.onStart();
        mAuth.addAuthStateListener(mAuthListener);
    }

    private void startSignIn(){

        String email= mEmailField.getText().toString();
        String password = mPasswordField.getText().toString();

        if(TextUtils.isEmpty(email)|| TextUtils.isEmpty(password)) {
            Toast.makeText(SignIn.this, "Fields are empty.", Toast.LENGTH_LONG).show();

        }else {
            mAuth.signInWithEmailAndPassword(email, password).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                @Override
                public void onComplete(@NonNull Task<AuthResult> task) {

                    if(!task.isSuccessful()){
                        Toast.makeText(SignIn.this, "Sign In Problem", Toast.LENGTH_LONG).show();
                    }
                }
            });

        }

    }
}

