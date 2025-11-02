class Media {
  final String url;
  final String type; // 'image' or 'video'

  Media({
    required this.url,
    required this.type,
  });

  factory Media.fromJson(Map<String, dynamic> json) {
    return Media(
      url: json['url'] as String,
      type: json['type'] as String,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'url': url,
      'type': type,
    };
  }

  bool get isImage => type == 'image';
  bool get isVideo => type == 'video';
}

class FlashcardFront {
  final String title;
  final String body;

  FlashcardFront({
    required this.title,
    required this.body,
  });

  factory FlashcardFront.fromJson(Map<String, dynamic> json) {
    return FlashcardFront(
      title: json['title'] as String,
      body: json['body'] as String,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'title': title,
      'body': body,
    };
  }
}

class FlashcardBack {
  final String answer;
  final Media? media;

  FlashcardBack({
    required this.answer,
    this.media,
  });

  factory FlashcardBack.fromJson(Map<String, dynamic> json) {
    return FlashcardBack(
      answer: json['answer'] as String,
      media: json['media'] != null
          ? Media.fromJson(json['media'] as Map<String, dynamic>)
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'answer': answer,
      'media': media?.toJson(),
    };
  }
}

class Flashcard {
  final String id;
  final FlashcardFront front;
  final FlashcardBack back;

  Flashcard({
    required this.id,
    required this.front,
    required this.back,
  });

  factory Flashcard.fromJson(Map<String, dynamic> json) {
    return Flashcard(
      id: json['id'] as String,
      front: FlashcardFront.fromJson(json['front'] as Map<String, dynamic>),
      back: FlashcardBack.fromJson(json['back'] as Map<String, dynamic>),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'front': front.toJson(),
      'back': back.toJson(),
    };
  }
}

