        package com.example.vitalhub

import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.vitalhub.ui.theme.VitalHubTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val webView: WebView = findViewById(R.id.webView)

        // Enable JavaScript if your HTML file uses it
        webView.settings.javaScriptEnabled = true
        webView.settings.allowFileAccess = true
        webView.settings.allowContentAccess = true
        webView.settings.javaScriptEnabled = true

        // Prevent opening links in external browser
        webView.webViewClient = WebViewClient()


        // Ensure links open inside the WebView instead of the default browser
        webView.webViewClient = WebViewClient()

        // Load the HTML file from the assets folder
        webView.loadUrl("file:///android_asset/index1 - Copy.html")













    }
}

