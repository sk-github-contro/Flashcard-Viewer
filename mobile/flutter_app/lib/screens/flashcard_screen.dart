import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import '../models/flashcard.dart';
import '../services/flashcard_service.dart';
import '../widgets/flashcard_widget.dart';
import '../widgets/progress_bar.dart';
import '../widgets/nav_link.dart';

class FlashcardScreen extends StatefulWidget {
  final List<Flashcard> flashcards;

  const FlashcardScreen({super.key, required this.flashcards});

  @override
  State<FlashcardScreen> createState() => _FlashcardScreenState();
}

class _FlashcardScreenState extends State<FlashcardScreen> {
  int currentIndex = 0;
  bool isFlipped = false;

  void handleFlip() {
    setState(() {
      isFlipped = !isFlipped;
    });
  }

  void goToNext() {
    if (currentIndex < widget.flashcards.length - 1) {
      setState(() {
        currentIndex++;
        isFlipped = false;
      });
    }
  }

  void goToPrevious() {
    if (currentIndex > 0) {
      setState(() {
        currentIndex--;
        isFlipped = false;
      });
    }
  }

  void handleRefresh() {
    final shuffled = FlashcardService.shuffleFlashcards(widget.flashcards);
    setState(() {
      currentIndex = 0;
      isFlipped = false;
    });
    // Note: In a real app, you'd update the flashcards list
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Flashcards reshuffled!')),
    );
  }

  double get progressPercentage {
    if (widget.flashcards.isEmpty) return 0;
    return (currentIndex + 1) / widget.flashcards.length * 100;
  }

  @override
  Widget build(BuildContext context) {
    if (widget.flashcards.isEmpty) {
      return Scaffold(
        body: Center(
          child: Text(
            'No flashcards available',
            style: Theme.of(context).textTheme.headlineMedium,
          ),
        ),
      );
    }

    final flashcard = widget.flashcards[currentIndex];

    return Scaffold(
      backgroundColor: const Color(0xFFF0F4F8),
      body: SafeArea(
        child: Column(
          children: [
            // Navigation and Refresh button
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  if (kIsWeb)
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                          decoration: BoxDecoration(
                            color: Colors.green,
                            borderRadius: BorderRadius.circular(4),
                          ),
                          child: const Text(
                            'You are on: Flutter',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 11,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                        const SizedBox(height: 4),
                        NavLink(
                          label: '← Switch to React Version',
                          route: 'https://flashcard-viewer.vercel.app',
                        ),
                      ],
                    )
                  else
                    const SizedBox.shrink(),
                  IconButton(
                    icon: const Icon(Icons.refresh),
                    onPressed: handleRefresh,
                    tooltip: 'Refresh and shuffle',
                  ),
                ],
              ),
            ),

            // Flashcard
            Expanded(
              child: Center(
                child: FlashcardWidget(
                  flashcard: flashcard,
                  isFlipped: isFlipped,
                  onFlip: handleFlip,
                ),
              ),
            ),

            // Navigation buttons
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 24.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    icon: const Icon(Icons.arrow_back_ios),
                    onPressed: currentIndex > 0 ? goToPrevious : null,
                    iconSize: 32,
                    color: currentIndex > 0 ? Colors.blue : Colors.grey,
                  ),
                  const SizedBox(width: 48),
                  IconButton(
                    icon: const Icon(Icons.arrow_forward_ios),
                    onPressed: currentIndex < widget.flashcards.length - 1
                        ? goToNext
                        : null,
                    iconSize: 32,
                    color: currentIndex < widget.flashcards.length - 1
                        ? Colors.blue
                        : Colors.grey,
                  ),
                ],
              ),
            ),

            // Progress bar
            ProgressBar(
              current: currentIndex + 1,
              total: widget.flashcards.length,
              percentage: progressPercentage,
            ),
          ],
        ),
      ),
    );
  }
}

