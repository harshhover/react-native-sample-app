package com.helloreactnative;

import com.facebook.react.ReactActivity;

import android.content.Context;
import android.view.KeyEvent;
import android.media.AudioManager;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */


  @Override
  protected String getMainComponentName() {
    return "HelloReactNative";
  }

     @Override
     public boolean onKeyDown(int keyCode, KeyEvent event) {
         AudioManager audio = (AudioManager) getSystemService(Context.AUDIO_SERVICE);
         switch (keyCode) {
             case KeyEvent.KEYCODE_VOLUME_UP:
                 audio.adjustStreamVolume(AudioManager.STREAM_MUSIC, AudioManager.ADJUST_RAISE, 0);
                 return true;
             case KeyEvent.KEYCODE_VOLUME_DOWN:
                 audio.adjustStreamVolume(AudioManager.STREAM_MUSIC, AudioManager.ADJUST_LOWER, 0);
                 return true;
             default:
                 return false;
         }
     }



}
