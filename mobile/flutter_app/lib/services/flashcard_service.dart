import 'dart:convert';
import 'package:flutter/services.dart';
import '../models/flashcard.dart';

class FlashcardService {
  static Future<List<Flashcard>> loadFlashcards() async {
    try {
      final String jsonString =
          await rootBundle.loadString('assets/flashcards.json');
      final List<dynamic> jsonList = json.decode(jsonString);
      return jsonList.map((json) => Flashcard.fromJson(json)).toList();
    } catch (e) {
      throw Exception('Failed to load flashcards: $e');
    }
  }

  static List<Flashcard> shuffleFlashcards(List<Flashcard> flashcards) {
    // Fisher-Yates shuffle algorithm
    final shuffled = List<Flashcard>.from(flashcards);
    final random = DateTime.now().millisecondsSinceEpoch;
    for (int i = shuffled.length - 1; i > 0; i--) {
      final j = (random % (i + 1));
      final temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    return shuffled;
  }
}

