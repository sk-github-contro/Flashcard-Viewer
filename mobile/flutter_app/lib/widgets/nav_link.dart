import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart' show kIsWeb;

// Conditional import for web only
import 'dart:html' as html show window;

class NavLink extends StatelessWidget {
  final String label;
  final String route;

  const NavLink({
    super.key,
    required this.label,
    required this.route,
  });

  @override
  Widget build(BuildContext context) {
    if (!kIsWeb) {
      return const SizedBox.shrink();
    }
    
    return TextButton(
      onPressed: () {
        // Web only - use dart:html
        html.window.location.href = route;
      },
      child: Text(
        label,
        style: const TextStyle(
          color: Colors.blue,
          decoration: TextDecoration.underline,
        ),
      ),
    );
  }
}

