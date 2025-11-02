import 'package:flutter/material.dart';
import 'screens/flashcard_screen.dart';
import 'services/flashcard_service.dart';
import 'models/flashcard.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const FlashcardApp());
}

class FlashcardApp extends StatelessWidget {
  const FlashcardApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flashcard Viewer',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(
          seedColor: Colors.blue,
          brightness: Brightness.light,
        ),
      ),
      home: FutureBuilder<List<Flashcard>>(
        future: FlashcardService.loadFlashcards(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Scaffold(
              body: Center(
                child: CircularProgressIndicator(),
              ),
            );
          }
          if (snapshot.hasError) {
            return Scaffold(
              body: Center(
                child: Text('Error loading flashcards: ${snapshot.error}'),
              ),
            );
          }
          final flashcards = snapshot.data!;
          final shuffled = FlashcardService.shuffleFlashcards(flashcards);
          return FlashcardScreen(flashcards: shuffled);
        },
      ),
    );
  }
}

